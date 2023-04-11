import { SpeakeasyBase } from "../../../internal/utils";
import { LinksElement } from "./linkselement";
export declare class PaginationLinks extends SpeakeasyBase {
    first: LinksElement;
    last: LinksElement;
    next?: LinksElement;
    prev?: LinksElement;
    self: LinksElement;
}
