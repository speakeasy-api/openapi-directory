import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The output from the DescribeThing operation.
 */
export declare class DescribeThingResponse extends SpeakeasyBase {
    attributes?: Record<string, string>;
    billingGroupName?: string;
    defaultClientId?: string;
    thingArn?: string;
    thingId?: string;
    thingName?: string;
    thingTypeName?: string;
    version?: number;
}
