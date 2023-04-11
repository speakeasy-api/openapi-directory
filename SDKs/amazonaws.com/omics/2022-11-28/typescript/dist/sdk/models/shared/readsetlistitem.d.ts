import { SpeakeasyBase } from "../../../internal/utils";
import { FileTypeEnum } from "./filetypeenum";
import { ReadSetStatusEnum } from "./readsetstatusenum";
import { SequenceInformation } from "./sequenceinformation";
/**
 * A read set.
 */
export declare class ReadSetListItem extends SpeakeasyBase {
    arn: string;
    creationTime: Date;
    description?: string;
    fileType: FileTypeEnum;
    id: string;
    name?: string;
    referenceArn?: string;
    sampleId?: string;
    /**
     * Details about a sequence.
     */
    sequenceInformation?: SequenceInformation;
    sequenceStoreId: string;
    status: ReadSetStatusEnum;
    subjectId?: string;
}
