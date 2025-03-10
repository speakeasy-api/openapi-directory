/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

public class CalculateRouteRequestBody {
    /**
     * Contains details about additional route preferences for requests that specify &lt;code&gt;TravelMode&lt;/code&gt; as &lt;code&gt;Car&lt;/code&gt;.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CarModeOptions")
    public CalculateRouteRequestBodyCarModeOptions carModeOptions;

    public CalculateRouteRequestBody withCarModeOptions(CalculateRouteRequestBodyCarModeOptions carModeOptions) {
        this.carModeOptions = carModeOptions;
        return this;
    }
    
    /**
     * &lt;p&gt;Sets the time of departure as the current time. Uses the current time to calculate a route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.&lt;/p&gt; &lt;p&gt;Default Value: &lt;code&gt;false&lt;/code&gt; &lt;/p&gt; &lt;p&gt;Valid Values: &lt;code&gt;false&lt;/code&gt; | &lt;code&gt;true&lt;/code&gt; &lt;/p&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DepartNow")
    public Boolean departNow;

    public CalculateRouteRequestBody withDepartNow(Boolean departNow) {
        this.departNow = departNow;
        return this;
    }
    
    /**
     * &lt;p&gt;The start position for the route. Defined in &lt;a href="https://earth-info.nga.mil/index.php?dir=wgs84&amp;amp;action=wgs84"&gt;World Geodetic System (WGS 84)&lt;/a&gt; format: &lt;code&gt;[longitude, latitude]&lt;/code&gt;.&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt;For example, &lt;code&gt;[-123.115, 49.285]&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;note&gt; &lt;p&gt;If you specify a departure that's not located on a road, Amazon Location &lt;a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html"&gt;moves the position to the nearest road&lt;/a&gt;. If Esri is the provider for your route calculator, specifying a route that is longer than 400 km returns a &lt;code&gt;400 RoutesValidationException&lt;/code&gt; error.&lt;/p&gt; &lt;/note&gt; &lt;p&gt;Valid Values: &lt;code&gt;[-180 to 180,-90 to 90]&lt;/code&gt; &lt;/p&gt;
     */
    @JsonProperty("DeparturePosition")
    public Double[] departurePosition;

    public CalculateRouteRequestBody withDeparturePosition(Double[] departurePosition) {
        this.departurePosition = departurePosition;
        return this;
    }
    
    /**
     * &lt;p&gt;Specifies the desired time of departure. Uses the given time to calculate the route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.&lt;/p&gt; &lt;note&gt; &lt;p&gt;Setting a departure time in the past returns a &lt;code&gt;400 ValidationException&lt;/code&gt; error.&lt;/p&gt; &lt;/note&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt;In &lt;a href="https://www.iso.org/iso-8601-date-and-time-format.html"&gt;ISO 8601&lt;/a&gt; format: &lt;code&gt;YYYY-MM-DDThh:mm:ss.sssZ&lt;/code&gt;. For example, &lt;code&gt;2020\u201307-2T12:15:20.000Z+01:00&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("DepartureTime")
    public OffsetDateTime departureTime;

    public CalculateRouteRequestBody withDepartureTime(OffsetDateTime departureTime) {
        this.departureTime = departureTime;
        return this;
    }
    
    /**
     * &lt;p&gt;The finish position for the route. Defined in &lt;a href="https://earth-info.nga.mil/index.php?dir=wgs84&amp;amp;action=wgs84"&gt;World Geodetic System (WGS 84)&lt;/a&gt; format: &lt;code&gt;[longitude, latitude]&lt;/code&gt;.&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; For example, &lt;code&gt;[-122.339, 47.615]&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;note&gt; &lt;p&gt;If you specify a destination that's not located on a road, Amazon Location &lt;a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html"&gt;moves the position to the nearest road&lt;/a&gt;. &lt;/p&gt; &lt;/note&gt; &lt;p&gt;Valid Values: &lt;code&gt;[-180 to 180,-90 to 90]&lt;/code&gt; &lt;/p&gt;
     */
    @JsonProperty("DestinationPosition")
    public Double[] destinationPosition;

    public CalculateRouteRequestBody withDestinationPosition(Double[] destinationPosition) {
        this.destinationPosition = destinationPosition;
        return this;
    }
    
    /**
     * &lt;p&gt;Set the unit system to specify the distance.&lt;/p&gt; &lt;p&gt;Default Value: &lt;code&gt;Kilometers&lt;/code&gt; &lt;/p&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DistanceUnit")
    public CalculateRouteRequestBodyDistanceUnitEnum distanceUnit;

    public CalculateRouteRequestBody withDistanceUnit(CalculateRouteRequestBodyDistanceUnitEnum distanceUnit) {
        this.distanceUnit = distanceUnit;
        return this;
    }
    
    /**
     * &lt;p&gt;Set to include the geometry details in the result for each path between a pair of positions.&lt;/p&gt; &lt;p&gt;Default Value: &lt;code&gt;false&lt;/code&gt; &lt;/p&gt; &lt;p&gt;Valid Values: &lt;code&gt;false&lt;/code&gt; | &lt;code&gt;true&lt;/code&gt; &lt;/p&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeLegGeometry")
    public Boolean includeLegGeometry;

    public CalculateRouteRequestBody withIncludeLegGeometry(Boolean includeLegGeometry) {
        this.includeLegGeometry = includeLegGeometry;
        return this;
    }
    
    /**
     * &lt;p&gt;Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. You can choose &lt;code&gt;Car&lt;/code&gt;, &lt;code&gt;Truck&lt;/code&gt;, &lt;code&gt;Walking&lt;/code&gt;, &lt;code&gt;Bicycle&lt;/code&gt; or &lt;code&gt;Motorcycle&lt;/code&gt; as options for the &lt;code&gt;TravelMode&lt;/code&gt;.&lt;/p&gt; &lt;note&gt; &lt;p&gt; &lt;code&gt;Bicycle&lt;/code&gt; and &lt;code&gt;Motorcycle&lt;/code&gt; are only valid when using Grab as a data provider, and only within Southeast Asia.&lt;/p&gt; &lt;p&gt; &lt;code&gt;Truck&lt;/code&gt; is not available for Grab.&lt;/p&gt; &lt;p&gt;For more details on the using Grab for routing, including areas of coverage, see &lt;a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html"&gt;GrabMaps&lt;/a&gt; in the &lt;i&gt;Amazon Location Service Developer Guide&lt;/i&gt;.&lt;/p&gt; &lt;/note&gt; &lt;p&gt;The &lt;code&gt;TravelMode&lt;/code&gt; you specify also determines how you specify route preferences: &lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt;If traveling by &lt;code&gt;Car&lt;/code&gt; use the &lt;code&gt;CarModeOptions&lt;/code&gt; parameter.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;If traveling by &lt;code&gt;Truck&lt;/code&gt; use the &lt;code&gt;TruckModeOptions&lt;/code&gt; parameter.&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Default Value: &lt;code&gt;Car&lt;/code&gt; &lt;/p&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TravelMode")
    public CalculateRouteRequestBodyTravelModeEnum travelMode;

    public CalculateRouteRequestBody withTravelMode(CalculateRouteRequestBodyTravelModeEnum travelMode) {
        this.travelMode = travelMode;
        return this;
    }
    
    /**
     * Contains details about additional route preferences for requests that specify &lt;code&gt;TravelMode&lt;/code&gt; as &lt;code&gt;Truck&lt;/code&gt;.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TruckModeOptions")
    public CalculateRouteRequestBodyTruckModeOptions truckModeOptions;

    public CalculateRouteRequestBody withTruckModeOptions(CalculateRouteRequestBodyTruckModeOptions truckModeOptions) {
        this.truckModeOptions = truckModeOptions;
        return this;
    }
    
    /**
     * &lt;p&gt;Specifies an ordered list of up to 23 intermediate positions to include along a route between the departure position and destination position. &lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt;For example, from the &lt;code&gt;DeparturePosition&lt;/code&gt; &lt;code&gt;[-123.115, 49.285]&lt;/code&gt;, the route follows the order that the waypoint positions are given &lt;code&gt;[[-122.757, 49.0021],[-122.349, 47.620]]&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;note&gt; &lt;p&gt;If you specify a waypoint position that's not located on a road, Amazon Location &lt;a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html"&gt;moves the position to the nearest road&lt;/a&gt;. &lt;/p&gt; &lt;p&gt;Specifying more than 23 waypoints returns a &lt;code&gt;400 ValidationException&lt;/code&gt; error.&lt;/p&gt; &lt;p&gt;If Esri is the provider for your route calculator, specifying a route that is longer than 400 km returns a &lt;code&gt;400 RoutesValidationException&lt;/code&gt; error.&lt;/p&gt; &lt;/note&gt; &lt;p&gt;Valid Values: &lt;code&gt;[-180 to 180,-90 to 90]&lt;/code&gt; &lt;/p&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WaypointPositions")
    public Double[][] waypointPositions;

    public CalculateRouteRequestBody withWaypointPositions(Double[][] waypointPositions) {
        this.waypointPositions = waypointPositions;
        return this;
    }
    
    public CalculateRouteRequestBody(@JsonProperty("DeparturePosition") Double[] departurePosition, @JsonProperty("DestinationPosition") Double[] destinationPosition) {
        this.departurePosition = departurePosition;
        this.destinationPosition = destinationPosition;
  }
}
