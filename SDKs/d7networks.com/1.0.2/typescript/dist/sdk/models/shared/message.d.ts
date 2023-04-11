import { SpeakeasyBase } from "../../../internal/utils";
export declare class Message extends SpeakeasyBase {
    content: string;
    from: string;
    /**
     * Destination Number
     */
    to: string[];
}
