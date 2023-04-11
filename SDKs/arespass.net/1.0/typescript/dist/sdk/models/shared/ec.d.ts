import { SpeakeasyBase } from "../../../internal/utils";
export declare class EcAlphabetSequence extends SpeakeasyBase {
    /**
     * The n-th character.
     */
    char?: string;
    /**
     * The n-th character after the l33t transformation.
     */
    l33tchar?: string;
    /**
     * The penalty applied to this character if it is part of an alphabet sequence.
     *
     * @remarks
     *
     * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
     *
     */
    penalty?: number;
}
export declare class EcEntropyDistribution extends SpeakeasyBase {
    /**
     * The n-th character.
     */
    char?: string;
    /**
     * The n-th character after the l33t transformation.
     */
    l33tchar?: string;
    /**
     * The amount of entropy contributed by this character, expressed as percentage of the total.
     */
    percentage?: number;
}
export declare class EcKeyboardSequence extends SpeakeasyBase {
    /**
     * The n-th character.
     */
    char?: string;
    /**
     * The n-th character after the l33t transformation.
     */
    l33tchar?: string;
    /**
     * The penalty applied to this character if it is part of a keyboard sequence.
     *
     * @remarks
     *
     * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
     *
     */
    penalty?: number;
}
export declare class EcNumberSequence extends SpeakeasyBase {
    /**
     * The n-th character.
     */
    char?: string;
    /**
     * The n-th character after the l33t transformation.
     */
    l33tchar?: string;
    /**
     * The penalty applied to this character if it is part of a number sequence.
     *
     * @remarks
     *
     * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
     *
     */
    penalty?: number;
}
export declare class EcRepeatedChars extends SpeakeasyBase {
    /**
     * The n-th character.
     */
    char?: string;
    /**
     * The n-th character after the l33t transformation.
     */
    l33tchar?: string;
    /**
     * The penalty applied to this character if it is repeated.
     *
     * @remarks
     *
     * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
     *
     */
    penalty?: number;
}
export declare class EcTotal extends SpeakeasyBase {
    /**
     * The n-th character.
     */
    char?: string;
    /**
     * The n-th character after the l33t transformation.
     */
    l33tchar?: string;
    /**
     * The total penalty applied to each character.
     *
     * @remarks
     *
     * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
     *
     */
    penalty?: number;
}
export declare class EcWords extends SpeakeasyBase {
    /**
     * The n-th character.
     */
    char?: string;
    /**
     * The n-th character after the l33t transformation.
     */
    l33tchar?: string;
    /**
     * The penalty applied to this character if it is part of a word.
     *
     * @remarks
     *
     * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
     *
     */
    penalty?: number;
}
/**
 * The password analysis, including the calculated entropy.
 */
export declare class Ec extends SpeakeasyBase {
    /**
     * **The penalty applied to each character that has been found to be part of an alphabet sequence.**
     *
     * @remarks
     *
     * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
     *
     */
    alphabetSequence?: EcAlphabetSequence[];
    /**
     * **This API version number.**
     *
     * @remarks
     *
     */
    apiVersion?: string;
    /**
     * **The detected keyboard, QWERTY or Dvorak.**
     *
     * @remarks
     *
     */
    detectedKeyboard?: string;
    /**
     * **The ratio entropy / idealEntropy.**
     *
     * @remarks
     *
     * It is a float number in the range [0, 1].
     *
     */
    efficiency?: number;
    /**
     * **The entropy calculated for the input password.**
     *
     * @remarks
     *
     * It is measured in bits.
     *
     */
    entropy?: number;
    /**
     * **The distribution of the calculated entropy among the password characters.**
     *
     * @remarks
     *
     */
    entropyDistribution?: EcEntropyDistribution[];
    /**
     * **The Shannon entropy.**
     *
     * @remarks
     *
     * The Shannon entropy is the entropy calculated if no penalizations - words, number sequence, alphabet sequence, etc - were found in the password.
     *
     * It is measured in bits.
     *
     */
    idealEntropy?: number;
    /**
     * **The penalty applied to each character that has been found to be part of a keyboard sequence.**
     *
     * @remarks
     *
     * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
     *
     */
    keyboardSequence?: EcKeyboardSequence[];
    /**
     * The analyzed password after the l33t substitution.
     */
    l33tPassword?: string;
    /**
     * **The penalty applied to the whole password because of irregular entropy distribution.**
     *
     * @remarks
     *
     * This penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
     *
     */
    nonUniformEntropyDistributionPenalty?: number;
    /**
     * **The penalty applied to each character that has been found to be part of a number sequence.**
     *
     * @remarks
     *
     * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
     *
     */
    numberSequence?: EcNumberSequence[];
    /**
     * The analyzed password.
     */
    password?: string;
    /**
     * The number of characters the password has.
     */
    passwordLength?: number;
    /**
     * **The penalty applied to each character that has been found to be part of a word, number sequence, alphabet sequence, etc.**
     *
     * @remarks
     *
     * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
     *
     * Its value is equal to the value of the input parameter *penalty*.
     *
     */
    penalty?: number;
    /**
     * **The penalty applied to each character that are repeated**
     *
     * @remarks
     *
     * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
     *
     */
    repeatedChars?: EcRepeatedChars[];
    /**
     * **The identifier of the request that corresponds to this response.**
     *
     * @remarks
     *
     */
    requestId?: string;
    /**
     * **The timestamp for this response.**
     *
     * @remarks
     *
     * Milliseconds from the epoch of 1970-01-01T00:00:00Z.
     *
     */
    requestTimestamp?: number;
    summary?: string[];
    /**
     * **The total penalty applied to each character.**
     *
     * @remarks
     *
     * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
     *
     */
    total?: EcTotal[];
    /**
     * **The penalty applied to each character that has been found to be part of a word.**
     *
     * @remarks
     *
     * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
     *
     */
    words?: EcWords[];
}
