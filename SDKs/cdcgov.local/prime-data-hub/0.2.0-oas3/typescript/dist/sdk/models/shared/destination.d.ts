import { SpeakeasyBase } from "../../../internal/utils";
export declare class Destination extends SpeakeasyBase {
    /**
     * The number of reports being sent to this destination
     */
    itemCount?: number;
    /**
     * The name of the organization reciving the report
     */
    organization?: string;
    /**
     * The organization id (i.e. {state abbreviation}-phd)
     */
    organizationId?: string;
    /**
     * The time at which the report will be sent
     */
    sendingAt?: Date;
    /**
     * The service used for delivering the report
     */
    service?: string;
}
