import { SpeakeasyBase } from "../../../internal/utils";
import { RecordStatusEnum } from "./recordstatusenum";
/**
 * Success
 */
export declare class UpdateProvisionedProductPropertiesOutput extends SpeakeasyBase {
    provisionedProductId?: string;
    provisionedProductProperties?: Record<string, string>;
    recordId?: string;
    status?: RecordStatusEnum;
}
