import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DescribeAccountAttributesRequestAttributeNamesEnum {
    SupportedPlatforms = "supported-platforms",
    DefaultVpc = "default-vpc"
}
export declare class DescribeAccountAttributesRequest extends SpeakeasyBase {
    attributeNames?: DescribeAccountAttributesRequestAttributeNamesEnum[];
    dryRun?: boolean;
}
