import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeItem } from "./instancetypeitem";
/**
 * Success
 */
export declare class GetOutpostInstanceTypesOutput extends SpeakeasyBase {
    /**
     * Information about the instance types.
     */
    instanceTypes?: InstanceTypeItem[];
    /**
     * The pagination token.
     */
    nextToken?: string;
    /**
     * The Amazon Resource Name (ARN) of the Outpost.
     */
    outpostArn?: string;
    outpostId?: string;
}
