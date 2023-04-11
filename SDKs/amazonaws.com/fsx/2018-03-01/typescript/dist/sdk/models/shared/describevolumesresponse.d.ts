import { SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";
/**
 * Success
 */
export declare class DescribeVolumesResponse extends SpeakeasyBase {
    /**
     * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
     */
    nextToken?: string;
    volumes?: Volume[];
}
