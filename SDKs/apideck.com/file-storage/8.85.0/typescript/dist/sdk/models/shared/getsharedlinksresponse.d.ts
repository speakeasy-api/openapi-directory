import { SpeakeasyBase } from "../../../internal/utils";
import { SharedLinkOutput } from "./sharedlink";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetSharedLinksResponseOutput extends SpeakeasyBase {
    data: SharedLinkOutput[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
