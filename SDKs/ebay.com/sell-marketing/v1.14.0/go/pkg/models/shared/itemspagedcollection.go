// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ItemsPagedCollection - This type defines the fields for a paginated result set of promotions. The response consists of 0 or more sequenced pages that are returned from the complete <i>result set</i>, where each page consists of 0 or more items.
type ItemsPagedCollection struct {
	// The URI of the current page of results from the result set.
	Href *string `json:"href,omitempty"`
	// The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
	Limit *int `json:"limit,omitempty"`
	// An array of the listings associated with a promotion.
	Listings []ListingDetail `json:"listings,omitempty"`
	// The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048
	Next *string `json:"next,omitempty"`
	// The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
	Offset *int `json:"offset,omitempty"`
	// The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048
	Prev *string `json:"prev,omitempty"`
	// The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.
	Total *int `json:"total,omitempty"`
	// A list of warnings that were generated by the request. Warning do not stop processing, but should be checked to ensure that the response contains the correct information.
	Warnings []Error `json:"warnings,omitempty"`
}
