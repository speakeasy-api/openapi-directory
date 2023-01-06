package shared

// PushApns
// Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
type PushApns struct {
	Notification *Notification `json:"notification,omitempty" form:"name=notification"`
}

// PushFcm
// Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
type PushFcm struct {
	Notification *Notification `json:"notification,omitempty" form:"name=notification"`
}

// PushWeb
// Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
type PushWeb struct {
	Notification *Notification `json:"notification,omitempty" form:"name=notification"`
}

type Push struct {
	Apns         *PushApns     `json:"apns,omitempty" form:"name=apns"`
	Data         *string       `json:"data,omitempty" form:"name=data"`
	Fcm          *PushFcm      `json:"fcm,omitempty" form:"name=fcm"`
	Notification *Notification `json:"notification,omitempty" form:"name=notification"`
	Web          *PushWeb      `json:"web,omitempty" form:"name=web"`
}
