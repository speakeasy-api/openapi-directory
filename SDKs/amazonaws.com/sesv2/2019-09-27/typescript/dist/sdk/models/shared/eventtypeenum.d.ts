/**
 * An email sending event type. For example, email sends, opens, and bounces are all email events.
 */
export declare enum EventTypeEnum {
    Send = "SEND",
    Reject = "REJECT",
    Bounce = "BOUNCE",
    Complaint = "COMPLAINT",
    Delivery = "DELIVERY",
    Open = "OPEN",
    Click = "CLICK",
    RenderingFailure = "RENDERING_FAILURE",
    DeliveryDelay = "DELIVERY_DELAY",
    Subscription = "SUBSCRIPTION"
}
