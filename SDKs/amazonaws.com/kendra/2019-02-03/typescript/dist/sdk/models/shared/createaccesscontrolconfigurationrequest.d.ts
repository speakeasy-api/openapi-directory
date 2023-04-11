import { SpeakeasyBase } from "../../../internal/utils";
import { HierarchicalPrincipal } from "./hierarchicalprincipal";
import { Principal } from "./principal";
export declare class CreateAccessControlConfigurationRequest extends SpeakeasyBase {
    accessControlList?: Principal[];
    clientToken?: string;
    description?: string;
    hierarchicalAccessControlList?: HierarchicalPrincipal[];
    indexId: string;
    name: string;
}
