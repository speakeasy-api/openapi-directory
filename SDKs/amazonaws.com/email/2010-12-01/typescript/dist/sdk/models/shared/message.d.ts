import { SpeakeasyBase } from "../../../internal/utils";
import { Body } from "./body";
import { Content } from "./content";
/**
 * Represents the message to be sent, composed of a subject and a body.
 */
export declare class Message extends SpeakeasyBase {
    body: Body;
    subject: Content;
}
