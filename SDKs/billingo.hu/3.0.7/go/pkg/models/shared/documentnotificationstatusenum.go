package shared

type DocumentNotificationStatusEnum string

const (
	DocumentNotificationStatusEnumClosed     DocumentNotificationStatusEnum = "closed"
	DocumentNotificationStatusEnumDownloaded DocumentNotificationStatusEnum = "downloaded"
	DocumentNotificationStatusEnumFailed     DocumentNotificationStatusEnum = "failed"
	DocumentNotificationStatusEnumNone       DocumentNotificationStatusEnum = "none"
	DocumentNotificationStatusEnumOpened     DocumentNotificationStatusEnum = "opened"
	DocumentNotificationStatusEnumReaded     DocumentNotificationStatusEnum = "readed"
)
