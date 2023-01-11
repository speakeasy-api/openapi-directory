import { SpeakeasyBase } from "../../../internal/utils";
import { Drive } from "./drive";
export declare class GetDriveResponse extends SpeakeasyBase {
    data: Drive;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
