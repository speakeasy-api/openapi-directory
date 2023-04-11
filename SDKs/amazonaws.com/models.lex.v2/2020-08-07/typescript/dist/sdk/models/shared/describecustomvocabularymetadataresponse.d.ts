import { SpeakeasyBase } from "../../../internal/utils";
import { CustomVocabularyStatusEnum } from "./customvocabularystatusenum";
/**
 * Success
 */
export declare class DescribeCustomVocabularyMetadataResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    creationDateTime?: Date;
    customVocabularyStatus?: CustomVocabularyStatusEnum;
    lastUpdatedDateTime?: Date;
    localeId?: string;
}
