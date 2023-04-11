import { SpeakeasyBase } from "../../../internal/utils";
import { ImageTagMutabilityEnum } from "./imagetagmutabilityenum";
/**
 * Success
 */
export declare class PutImageTagMutabilityResponse extends SpeakeasyBase {
    imageTagMutability?: ImageTagMutabilityEnum;
    registryId?: string;
    repositoryName?: string;
}
