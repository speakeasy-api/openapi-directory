import { SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";
import { NotificationSpecification } from "./notificationspecification";
export declare class SendTestEventNotificationRequest extends SpeakeasyBase {
    notification: NotificationSpecification;
    testEventType: EventTypeEnum;
}
