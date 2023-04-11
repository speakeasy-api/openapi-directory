import { SpeakeasyBase } from "../../../internal/utils";
import { FormalityEnum } from "./formalityenum";
import { ProfanityEnum } from "./profanityenum";
/**
 * Optional settings that configure the translation output. Use these settings for real time translations and asynchronous translation jobs.
 */
export declare class TranslationSettings extends SpeakeasyBase {
    formality?: FormalityEnum;
    profanity?: ProfanityEnum;
}
