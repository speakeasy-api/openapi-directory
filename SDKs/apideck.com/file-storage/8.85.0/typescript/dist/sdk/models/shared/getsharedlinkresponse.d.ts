import { SpeakeasyBase } from "../../../internal/utils";
import { SharedLinkOutput } from "./sharedlink";
export declare class GetSharedLinkResponseOutput extends SpeakeasyBase {
    data: SharedLinkOutput;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
