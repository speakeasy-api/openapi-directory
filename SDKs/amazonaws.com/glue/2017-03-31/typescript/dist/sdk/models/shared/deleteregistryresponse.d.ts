import { SpeakeasyBase } from "../../../internal/utils";
import { RegistryStatusEnum } from "./registrystatusenum";
/**
 * Success
 */
export declare class DeleteRegistryResponse extends SpeakeasyBase {
    registryArn?: string;
    registryName?: string;
    status?: RegistryStatusEnum;
}
