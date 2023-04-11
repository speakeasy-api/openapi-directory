import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisassociateOriginationIdentityRequest extends SpeakeasyBase {
    clientToken?: string;
    isoCountryCode: string;
    originationIdentity: string;
    poolId: string;
}
