import { SpeakeasyBase } from "../../../internal/utils";
import { FileTypeEnum } from "./filetypeenum";
import { ReadSetFiles } from "./readsetfiles";
import { ReadSetStatusEnum } from "./readsetstatusenum";
import { SequenceInformation } from "./sequenceinformation";
/**
 * Success
 */
export declare class GetReadSetMetadataResponse extends SpeakeasyBase {
    arn: string;
    creationTime: Date;
    description?: string;
    fileType: FileTypeEnum;
    files?: ReadSetFiles;
    id: string;
    name?: string;
    referenceArn?: string;
    sampleId?: string;
    sequenceInformation?: SequenceInformation;
    sequenceStoreId: string;
    status: ReadSetStatusEnum;
    subjectId?: string;
}
