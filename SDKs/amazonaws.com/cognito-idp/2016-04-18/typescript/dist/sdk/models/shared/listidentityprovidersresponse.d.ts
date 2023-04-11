import { SpeakeasyBase } from "../../../internal/utils";
import { ProviderDescription } from "./providerdescription";
/**
 * Success
 */
export declare class ListIdentityProvidersResponse extends SpeakeasyBase {
    nextToken?: string;
    providers: ProviderDescription[];
}
