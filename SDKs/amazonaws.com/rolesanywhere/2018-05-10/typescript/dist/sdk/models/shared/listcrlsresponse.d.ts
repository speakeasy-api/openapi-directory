import { SpeakeasyBase } from "../../../internal/utils";
import { CrlDetail } from "./crldetail";
/**
 * Success
 */
export declare class ListCrlsResponse extends SpeakeasyBase {
    crls?: CrlDetail[];
    nextToken?: string;
}
