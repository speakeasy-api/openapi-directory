// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ConnectionPoolConfiguration - Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.
type ConnectionPoolConfiguration struct {
	ConnectionBorrowTimeout   *int64
	InitQuery                 *string
	MaxConnectionsPercent     *int64
	MaxIdleConnectionsPercent *int64
	SessionPinningFilters     []string
}
