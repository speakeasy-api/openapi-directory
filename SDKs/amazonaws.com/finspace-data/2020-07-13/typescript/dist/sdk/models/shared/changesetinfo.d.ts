import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeTypeEnum } from "./changetypeenum";
import { ErrorInfo } from "./errorinfo";
import { FormatTypeEnum } from "./formattypeenum";
import { SourceTypeEnum } from "./sourcetypeenum";
import { ChangesetStatusEnum } from "./changesetstatusenum";
/**
 * A changeset is unit of data in a dataset.
**/
export declare class ChangesetInfo extends SpeakeasyBase {
    changeType?: ChangeTypeEnum;
    changesetArn?: string;
    changesetLabels?: Record<string, string>;
    createTimestamp?: Date;
    datasetId?: string;
    errorInfo?: ErrorInfo;
    formatParams?: Record<string, string>;
    formatType?: FormatTypeEnum;
    id?: string;
    sourceParams?: Record<string, string>;
    sourceType?: SourceTypeEnum;
    status?: ChangesetStatusEnum;
    updatedByChangesetId?: string;
    updatesChangesetId?: string;
}
