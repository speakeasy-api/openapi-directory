import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceConfigurationSchemaTypeEnum } from "./resourceconfigurationschematypeenum";
/**
 * Returns information about the resource being evaluated.
 */
export declare class ResourceDetails extends SpeakeasyBase {
    resourceConfiguration: string;
    resourceConfigurationSchemaType?: ResourceConfigurationSchemaTypeEnum;
    resourceId: string;
    resourceType: string;
}
