import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the parameters to the <code><a>DescribeDomainEndpointOptions</a></code> operation. Specify the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.
 */
export declare class DescribeDomainEndpointOptionsRequest extends SpeakeasyBase {
    deployed?: boolean;
    domainName: string;
}
