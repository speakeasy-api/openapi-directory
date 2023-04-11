import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure containing the identity provider (IdP) metadata used to integrate the identity provider with this workspace. You can specify the metadata either by providing a URL to its location in the <code>url</code> parameter, or by specifying the full metadata in XML format in the <code>xml</code> parameter. Specifying both will cause an error.
 */
export declare class IdpMetadata extends SpeakeasyBase {
    url?: string;
    xml?: string;
}
