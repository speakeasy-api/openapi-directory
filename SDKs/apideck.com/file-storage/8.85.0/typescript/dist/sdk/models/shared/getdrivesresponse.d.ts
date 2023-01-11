import { SpeakeasyBase } from "../../../internal/utils";
import { Drive } from "./drive";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetDrivesResponse extends SpeakeasyBase {
    data: Drive[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
