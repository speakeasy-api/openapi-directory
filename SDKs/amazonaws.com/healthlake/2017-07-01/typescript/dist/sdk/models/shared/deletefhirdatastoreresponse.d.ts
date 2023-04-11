import { SpeakeasyBase } from "../../../internal/utils";
import { DatastoreStatusEnum } from "./datastorestatusenum";
/**
 * Success
 */
export declare class DeleteFHIRDatastoreResponse extends SpeakeasyBase {
    datastoreArn: string;
    datastoreEndpoint: string;
    datastoreId: string;
    datastoreStatus: DatastoreStatusEnum;
}
