import { SpeakeasyBase } from "../../../internal/utils";
import { ReadSetExportJobItemStatusEnum } from "./readsetexportjobitemstatusenum";
/**
 * Details about a read set.
 */
export declare class ExportReadSetDetail extends SpeakeasyBase {
    id: string;
    status: ReadSetExportJobItemStatusEnum;
    statusMessage?: string;
}
