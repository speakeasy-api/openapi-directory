import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a launch request for one or more instances, and includes owner, requester, and security group information that applies to all instances in the launch request.
**/
export declare class Reservation extends SpeakeasyBase {
    groups?: Record<string, any>;
    instances?: Record<string, any>;
    ownerId?: Record<string, any>;
    requesterId?: Record<string, any>;
    reservationId?: Record<string, any>;
}
