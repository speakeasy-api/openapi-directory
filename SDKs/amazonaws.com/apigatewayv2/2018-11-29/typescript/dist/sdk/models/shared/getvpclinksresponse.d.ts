import { SpeakeasyBase } from "../../../internal/utils";
import { VpcLink } from "./vpclink";
/**
 * Success
 */
export declare class GetVpcLinksResponse extends SpeakeasyBase {
    items?: VpcLink[];
    nextToken?: string;
}
