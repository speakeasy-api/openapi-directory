import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Payload of signin object
 */
export declare class Signin extends SpeakeasyBase {
    /**
     * The original scan time in number of seconds since 1/1/1970 (GMT)
     */
    dt?: number;
    /**
     * The person's email
     */
    email?: string;
    /**
     * The record id
     */
    id?: number;
    /**
     * The person's name
     */
    name: string;
    /**
     * The person's phone number
     */
    phone: string;
}
