import { SpeakeasyBase } from "../../../internal/utils";
import { DomainEndpointOptions } from "./domainendpointoptions";
/**
 * Container for the parameters to the <code><a>UpdateDomainEndpointOptions</a></code> operation. Specifies the name of the domain you want to update and the domain endpoint options.
 */
export declare class UpdateDomainEndpointOptionsRequest extends SpeakeasyBase {
    domainEndpointOptions: DomainEndpointOptions;
    domainName: string;
}
