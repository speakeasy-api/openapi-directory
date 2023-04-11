import { SpeakeasyBase } from "../../../internal/utils";
import { CompletionReport } from "./completionreport";
import { DataRepositoryTaskTypeEnum } from "./datarepositorytasktypeenum";
import { Tag } from "./tag";
export declare class CreateDataRepositoryTaskRequest extends SpeakeasyBase {
    capacityToRelease?: number;
    /**
     * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
     */
    clientRequestToken?: string;
    /**
     * The globally unique ID of the file system, assigned by Amazon FSx.
     */
    fileSystemId: string;
    paths?: string[];
    report: CompletionReport;
    /**
     * A list of <code>Tag</code> values, with a maximum of 50 elements.
     */
    tags?: Tag[];
    type: DataRepositoryTaskTypeEnum;
}
