import { SpeakeasyBase } from "../../../internal/utils";
import { IssuerCertificateIdentifier } from "./issuercertificateidentifier";
import { PolicyVersionIdentifier } from "./policyversionidentifier";
/**
 * Information that identifies the noncompliant resource.
 */
export declare class ResourceIdentifier extends SpeakeasyBase {
    account?: string;
    caCertificateId?: string;
    clientId?: string;
    cognitoIdentityPoolId?: string;
    deviceCertificateArn?: string;
    deviceCertificateId?: string;
    iamRoleArn?: string;
    issuerCertificateIdentifier?: IssuerCertificateIdentifier;
    policyVersionIdentifier?: PolicyVersionIdentifier;
    roleAliasArn?: string;
}
