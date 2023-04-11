import { SpeakeasyBase } from "../../../internal/utils";
import { SourceServerActionDocument } from "./sourceserveractiondocument";
/**
 * Success
 */
export declare class ListSourceServerActionsResponse extends SpeakeasyBase {
    items?: SourceServerActionDocument[];
    nextToken?: string;
}
