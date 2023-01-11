import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateSubscriptionRequest extends SpeakeasyBase {
    merchantApplicationName: string;
    merchantApplicationVersion: string;
    merchantEmailAlert?: string;
    name: string;
    targetUrl: string;
}
