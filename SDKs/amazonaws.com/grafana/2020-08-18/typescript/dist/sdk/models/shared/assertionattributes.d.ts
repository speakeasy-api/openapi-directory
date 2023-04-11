import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure that defines which attributes in the IdP assertion are to be used to define information about the users authenticated by the IdP to use the workspace.
 */
export declare class AssertionAttributes extends SpeakeasyBase {
    email?: string;
    groups?: string;
    login?: string;
    name?: string;
    org?: string;
    role?: string;
}
