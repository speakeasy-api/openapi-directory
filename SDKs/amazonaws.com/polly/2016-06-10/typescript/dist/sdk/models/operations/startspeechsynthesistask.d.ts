import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error.
 */
export declare enum StartSpeechSynthesisTaskRequestBodyEngineEnum {
    Standard = "standard",
    Neural = "neural"
}
/**
 * <p>Optional language code for the Speech Synthesis request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p>
 */
export declare enum StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum {
    Arb = "arb",
    CmnCN = "cmn-CN",
    CyGB = "cy-GB",
    DaDK = "da-DK",
    DEDE = "de-DE",
    EnAU = "en-AU",
    EnGB = "en-GB",
    EnGBWLS = "en-GB-WLS",
    EnIN = "en-IN",
    EnUS = "en-US",
    ESES = "es-ES",
    EsMX = "es-MX",
    EsUS = "es-US",
    FrCA = "fr-CA",
    FRFR = "fr-FR",
    ISIS = "is-IS",
    ITIT = "it-IT",
    JaJP = "ja-JP",
    HiIN = "hi-IN",
    KoKR = "ko-KR",
    NbNO = "nb-NO",
    NLNL = "nl-NL",
    PLPL = "pl-PL",
    PtBR = "pt-BR",
    PTPT = "pt-PT",
    RORO = "ro-RO",
    RURU = "ru-RU",
    SvSE = "sv-SE",
    TRTR = "tr-TR",
    EnNZ = "en-NZ",
    EnZA = "en-ZA",
    CaES = "ca-ES",
    DeAT = "de-AT",
    YueCN = "yue-CN",
    ArAE = "ar-AE",
    FIFI = "fi-FI"
}
/**
 * The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json.
 */
export declare enum StartSpeechSynthesisTaskRequestBodyOutputFormatEnum {
    Json = "json",
    Mp3 = "mp3",
    OggVorbis = "ogg_vorbis",
    Pcm = "pcm"
}
/**
 * Specifies whether the input text is plain text or SSML. The default value is plain text.
 */
export declare enum StartSpeechSynthesisTaskRequestBodyTextTypeEnum {
    Ssml = "ssml",
    Text = "text"
}
/**
 * Voice ID to use for the synthesis.
 */
export declare enum StartSpeechSynthesisTaskRequestBodyVoiceIdEnum {
    Aditi = "Aditi",
    Amy = "Amy",
    Astrid = "Astrid",
    Bianca = "Bianca",
    Brian = "Brian",
    Camila = "Camila",
    Carla = "Carla",
    Carmen = "Carmen",
    Celine = "Celine",
    Chantal = "Chantal",
    Conchita = "Conchita",
    Cristiano = "Cristiano",
    Dora = "Dora",
    Emma = "Emma",
    Enrique = "Enrique",
    Ewa = "Ewa",
    Filiz = "Filiz",
    Gabrielle = "Gabrielle",
    Geraint = "Geraint",
    Giorgio = "Giorgio",
    Gwyneth = "Gwyneth",
    Hans = "Hans",
    Ines = "Ines",
    Ivy = "Ivy",
    Jacek = "Jacek",
    Jan = "Jan",
    Joanna = "Joanna",
    Joey = "Joey",
    Justin = "Justin",
    Karl = "Karl",
    Kendra = "Kendra",
    Kevin = "Kevin",
    Kimberly = "Kimberly",
    Lea = "Lea",
    Liv = "Liv",
    Lotte = "Lotte",
    Lucia = "Lucia",
    Lupe = "Lupe",
    Mads = "Mads",
    Maja = "Maja",
    Marlene = "Marlene",
    Mathieu = "Mathieu",
    Matthew = "Matthew",
    Maxim = "Maxim",
    Mia = "Mia",
    Miguel = "Miguel",
    Mizuki = "Mizuki",
    Naja = "Naja",
    Nicole = "Nicole",
    Olivia = "Olivia",
    Penelope = "Penelope",
    Raveena = "Raveena",
    Ricardo = "Ricardo",
    Ruben = "Ruben",
    Russell = "Russell",
    Salli = "Salli",
    Seoyeon = "Seoyeon",
    Takumi = "Takumi",
    Tatyana = "Tatyana",
    Vicki = "Vicki",
    Vitoria = "Vitoria",
    Zeina = "Zeina",
    Zhiyu = "Zhiyu",
    Aria = "Aria",
    Ayanda = "Ayanda",
    Arlet = "Arlet",
    Hannah = "Hannah",
    Arthur = "Arthur",
    Daniel = "Daniel",
    Liam = "Liam",
    Pedro = "Pedro",
    Kajal = "Kajal",
    Hiujin = "Hiujin",
    Laura = "Laura",
    Elin = "Elin",
    Ida = "Ida",
    Suvi = "Suvi",
    Ola = "Ola",
    Hala = "Hala",
    Andres = "Andres",
    Sergio = "Sergio",
    Remi = "Remi",
    Adriano = "Adriano",
    Thiago = "Thiago",
    Ruth = "Ruth",
    Stephen = "Stephen",
    Kazuha = "Kazuha",
    Tomoko = "Tomoko"
}
export declare class StartSpeechSynthesisTaskRequestBody extends SpeakeasyBase {
    /**
     * Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error.
     */
    engine?: StartSpeechSynthesisTaskRequestBodyEngineEnum;
    /**
     * <p>Optional language code for the Speech Synthesis request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p>
     */
    languageCode?: StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum;
    /**
     * List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice.
     */
    lexiconNames?: string[];
    /**
     * The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json.
     */
    outputFormat: StartSpeechSynthesisTaskRequestBodyOutputFormatEnum;
    /**
     * Amazon S3 bucket name to which the output file will be saved.
     */
    outputS3BucketName: string;
    /**
     * The Amazon S3 key prefix for the output speech file.
     */
    outputS3KeyPrefix?: string;
    /**
     * <p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p>
     */
    sampleRate?: string;
    /**
     * ARN for the SNS topic optionally used for providing status notification for a speech synthesis task.
     */
    snsTopicArn?: string;
    /**
     * The type of speech marks returned for the input text.
     */
    speechMarkTypes?: shared.SpeechMarkTypeEnum[];
    /**
     * The input text to synthesize. If you specify ssml as the TextType, follow the SSML format for the input text.
     */
    text: string;
    /**
     * Specifies whether the input text is plain text or SSML. The default value is plain text.
     */
    textType?: StartSpeechSynthesisTaskRequestBodyTextTypeEnum;
    /**
     * Voice ID to use for the synthesis.
     */
    voiceId: StartSpeechSynthesisTaskRequestBodyVoiceIdEnum;
}
export declare class StartSpeechSynthesisTaskRequest extends SpeakeasyBase {
    requestBody: StartSpeechSynthesisTaskRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartSpeechSynthesisTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EngineNotSupportedException
     */
    engineNotSupportedException?: any;
    /**
     * InvalidS3BucketException
     */
    invalidS3BucketException?: any;
    /**
     * InvalidS3KeyException
     */
    invalidS3KeyException?: any;
    /**
     * InvalidSampleRateException
     */
    invalidSampleRateException?: any;
    /**
     * InvalidSnsTopicArnException
     */
    invalidSnsTopicArnException?: any;
    /**
     * InvalidSsmlException
     */
    invalidSsmlException?: any;
    /**
     * LanguageNotSupportedException
     */
    languageNotSupportedException?: any;
    /**
     * LexiconNotFoundException
     */
    lexiconNotFoundException?: any;
    /**
     * MarksNotSupportedForFormatException
     */
    marksNotSupportedForFormatException?: any;
    /**
     * ServiceFailureException
     */
    serviceFailureException?: any;
    /**
     * SsmlMarksNotSupportedForTextTypeException
     */
    ssmlMarksNotSupportedForTextTypeException?: any;
    /**
     * Success
     */
    startSpeechSynthesisTaskOutput?: shared.StartSpeechSynthesisTaskOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TextLengthExceededException
     */
    textLengthExceededException?: any;
}
