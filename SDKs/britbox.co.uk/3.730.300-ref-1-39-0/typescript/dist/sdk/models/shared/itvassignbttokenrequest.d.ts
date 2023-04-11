import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of an assign request.
 */
export declare class ItvAssignBtTokenRequest extends SpeakeasyBase {
    /**
     * The ITV profile token
     */
    profileToken: string;
    /**
     * The validated userToken.
     */
    token: string;
}
