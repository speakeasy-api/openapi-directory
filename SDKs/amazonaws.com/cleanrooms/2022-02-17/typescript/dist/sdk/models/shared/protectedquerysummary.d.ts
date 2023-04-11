import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectedQueryStatusEnum } from "./protectedquerystatusenum";
/**
 * The protected query summary for the objects listed by the request.
 */
export declare class ProtectedQuerySummary extends SpeakeasyBase {
    createTime: Date;
    id: string;
    membershipArn: string;
    membershipId: string;
    status: ProtectedQueryStatusEnum;
}
