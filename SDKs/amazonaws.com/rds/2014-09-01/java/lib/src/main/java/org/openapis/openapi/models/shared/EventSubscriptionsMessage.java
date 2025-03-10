/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * EventSubscriptionsMessage - Success
 */
public class EventSubscriptionsMessage {
    
    public EventSubscriptionsList[] eventSubscriptionsList;

    public EventSubscriptionsMessage withEventSubscriptionsList(EventSubscriptionsList[] eventSubscriptionsList) {
        this.eventSubscriptionsList = eventSubscriptionsList;
        return this;
    }
    
    
    public String marker;

    public EventSubscriptionsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    
    public EventSubscriptionsMessage(){}
}
