import { SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkSpecifier } from "./typedlinkspecifier";
/**
 * Success
 */
export declare class ListOutgoingTypedLinksResponse extends SpeakeasyBase {
    nextToken?: string;
    typedLinkSpecifiers?: TypedLinkSpecifier[];
}
