import { SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";
/**
 * Success
 */
export declare class DeleteImportResponse extends SpeakeasyBase {
    importId?: string;
    importStatus?: ImportStatusEnum;
}
