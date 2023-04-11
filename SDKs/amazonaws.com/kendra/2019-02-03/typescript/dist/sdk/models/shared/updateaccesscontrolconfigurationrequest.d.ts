import { SpeakeasyBase } from "../../../internal/utils";
import { HierarchicalPrincipal } from "./hierarchicalprincipal";
import { Principal } from "./principal";
export declare class UpdateAccessControlConfigurationRequest extends SpeakeasyBase {
    accessControlList?: Principal[];
    description?: string;
    hierarchicalAccessControlList?: HierarchicalPrincipal[];
    id: string;
    indexId: string;
    name?: string;
}
